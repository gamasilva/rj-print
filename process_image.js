const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImage() {
  const inputPath = path.join(__dirname, 'public', 'logo_rjprint.jpg');
  const webpOutputPath = path.join(__dirname, 'public', 'logo_rjprint.webp');
  const faviconOutputPath = path.join(__dirname, 'public', 'favicon.ico');
  
  try {
    // Convert to webp
    await sharp(inputPath)
      .webp({ quality: 90 })
      .toFile(webpOutputPath);
      
    console.log('Successfully created logo_rjprint.webp');
    
    // Create favicon (32x32 ico/png format works, we'll output a png as favicon.ico just in case, but sharp supports png. Let's output favicon.png and update layout to use .png, or we just write .ico format - actually sharp doesn't fully support multi-size .ico out of the box. So let's create a 32x32 png and save as favicon.png)
    const faviconPngPath = path.join(__dirname, 'public', 'favicon.png');
    await sharp(inputPath)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(faviconPngPath);
      
    // Overwrite favicon.ico as well by just copying the png, browsers accept png named .ico
    fs.copyFileSync(faviconPngPath, faviconOutputPath);
    console.log('Successfully created favicon.png and favicon.ico');

    // Extract dominant / top-left color
    const stats = await sharp(inputPath)
      .extract({ left: 0, top: 0, width: 10, height: 10 })
      .stats();
    
    const dominant = stats.dominant;
    console.log(`EXTRACTED_COLOR: rgba(${dominant.r}, ${dominant.g}, ${dominant.b}, 1)`);
    console.log(`EXTRACTED_HEX: #${dominant.r.toString(16).padStart(2,'0')}${dominant.g.toString(16).padStart(2,'0')}${dominant.b.toString(16).padStart(2,'0')}`);

  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
