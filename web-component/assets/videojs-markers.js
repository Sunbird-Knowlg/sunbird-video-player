"use strict";!function(x,e){var y={markerStyle:{width:"7px","border-radius":"30%","background-color":"red"},markerTip:{display:!0,text:function(e){return"Break: "+e.text},time:function(e){return e.time}},breakOverlay:{display:!1,displayTime:3,text:function(e){return"Break overlay: "+e.overlayText},style:{width:"100%",height:"20%","background-color":"rgba(0,0,0,0.7)",color:"white","font-size":"17px"}},onMarkerClick:function(e){},onMarkerReached:function(e){},markers:[]};e.plugin("markers",function(n){var s=x.extend(!0,{},y,n),a={},o=[],l=x(this.el()),m=-1,c=this,t=null,k=null,d=-1;function v(){o.sort(function(e,r){return s.markerTip.time(e)-s.markerTip.time(r)})}function r(e){x.each(e,function(e,r){var i;r.key=(i=(new Date).getTime(),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(i+16*Math.random())%16|0;return i=Math.floor(i/16),("x"==e?r:3&r|8).toString(16)})),l.find(".vjs-progress-control").append(function(i){var e=x("<div class='vjs-marker'></div>");e.css(s.markerStyle).css({"margin-left":-parseFloat(e.css("width"))/2+"px",left:u(i)+"%"}).attr("data-marker-key",i.key).attr("data-marker-time",s.markerTip.time(i)),i.class&&e.addClass(i.class);e.on("click",function(e){var r=!1;"function"==typeof s.onMarkerClick&&(r=0==s.onMarkerClick(i)),r||(r=x(this).data("marker-key"),c.currentTime(s.markerTip.time(a[r])))}),s.markerTip.display&&e.on("mouseover",function(){var e=a[x(this).data("marker-key")];t.find(".vjs-tip-inner").text(s.markerTip.text(e)),t.css({left:u(e)+"%","margin-left":-parseFloat(t.css("width"))/2-5+"px",visibility:"visible"})}).on("mouseout",function(){t.css("visibility","hidden")});return e}(r)),a[r.key]=r,o.push(r)}),v()}function u(e){return s.markerTip.time(e)/c.duration()*100}function i(e){k&&(d=-1,k.css("visibility","hidden")),m=-1;for(var r=0;r<e.length;r++){var i=e[r],t=o[i];t&&(delete a[t.key],o[i]=null,l.find(".vjs-marker[data-marker-key='"+t.key+"']").remove())}for(r=o.length-1;0<=r;r--)null===o[r]&&o.splice(r,1);v()}function f(e){var r,i;m<0||(r=o[m],(i=s.markerTip.time(r))<=e&&e<=i+s.breakOverlay.displayTime?(d!=m&&(d=m,k.find(".vjs-break-overlay-text").text(s.breakOverlay.text(r))),k.css("visibility","visible")):(d=-1,k.css("visibility","hidden")))}function e(){function e(e){return e<o.length-1?s.markerTip.time(o[e+1]):c.duration()}var r,i=c.currentTime();if(-1!=m){var t=e(m);if(i>=s.markerTip.time(o[m])&&i<t)return}if(0<o.length&&i<s.markerTip.time(o[0]))r=-1;else for(var a=0;a<o.length;a++)if(t=e(a),i>=s.markerTip.time(o[a])&&i<t){r=a;break}r!=m&&(-1!=r&&n.onMarkerReached&&n.onMarkerReached(o[r]),m=r),s.breakOverlay.display&&f(i)}function p(){s.markerTip.display&&(t=x("<div class='vjs-tip'><div class='vjs-tip-arrow'></div><div class='vjs-tip-inner'></div></div>"),l.find(".vjs-progress-control").append(t)),c.markers.removeAll(),r(n.markers),s.breakOverlay.display&&(k=x("<div class='vjs-break-overlay'><div class='vjs-break-overlay-text'></div></div>").css(s.breakOverlay.style),l.append(k),d=-1),e(),c.on("timeupdate",e)}c.on("loadedmetadata",function(){p()}),c.markers={getMarkers:function(){return o},next:function(){for(var e=c.currentTime(),r=0;r<o.length;r++){var i=s.markerTip.time(o[r]);if(e<i){c.currentTime(i);break}}},prev:function(){for(var e=c.currentTime(),r=o.length-1;0<=r;r--){var i=s.markerTip.time(o[r]);if(i+.5<e){c.currentTime(i);break}}},add:function(e){r(e)},remove:function(e){i(e)},removeAll:function(){for(var e=[],r=0;r<o.length;r++)e.push(r);i(e)},updateTime:function(){!function(){for(var e=0;e<o.length;e++){var r=o[e],i=l.find(".vjs-marker[data-marker-key='"+r.key+"']"),t=s.markerTip.time(r);i.data("marker-time")!=t&&i.css({left:u(r)+"%"}).attr("data-marker-time",t)}v()}()},reset:function(e){c.markers.removeAll(),r(e)},destroy:function(){c.markers.removeAll(),k.remove(),t.remove(),c.off("timeupdate",f),delete c.markers}}})}(jQuery,window.videojs);