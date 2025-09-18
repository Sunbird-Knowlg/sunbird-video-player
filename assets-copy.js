const fs = require('fs-extra');
(async () => {
    try {
        var source = "projects/sunbird-video-player/node_modules/@project-sunbird/sunbird-player-sdk-v9/lib/assets";
        var libsource = "projects/sunbird-video-player/src/lib/assets";

        const libDest = "dist/sunbird-video-player/lib/assets/"; 
        // Web component assets destination  
        const wcDest = "dist/video-player-wc/assets/";
        // Copy for library build
        const isLibAssetsExists = await fs.pathExists(libDest)
        if (isLibAssetsExists) {
            await fs.remove(libDest);
        }
        await fs.ensureDir(libDest);
        
        // Copy for web component build
        await fs.ensureDir(wcDest);
        
        // Copy to both destinations if sources exist
        if (await fs.pathExists(source)) {
            await fs.copy(source, libDest);
            await fs.copy(source, wcDest);
        }
        if (await fs.pathExists(libsource)) {
            await fs.copy(libsource, libDest);
            await fs.copy(libsource, wcDest);
        }
        
        console.log('Assets copied successfully to both destinations');
    } catch (err) {
        console.error("Error while copying assets", err);
    }
})();