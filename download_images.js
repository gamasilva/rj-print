const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  'https://i.ibb.co/pjwqkcrP/EPSON-T544-KIT-4-CORES.png',
  'https://i.ibb.co/bMg7VBpC/Kit-4-Cores-Tinta-Epson.png',
  'https://i.ibb.co/DHyPgMNV/Kit-5-Refis-Tinta-Mega-Tank-Para-Gi10-G10-Gm2010-G6010-G7010.png',
  'https://i.ibb.co/MxdFYSmS/Kit-6-Tintas-T664-Epson.png',
  'https://i.ibb.co/CKMnf7RM/Kit-Tinta-Fotogr-fica-Epson-Original.png',
  'https://i.ibb.co/Y46ypKgZ/Kit-Tinta-Original-Para-Gx6010-Gx7010-Gi-16-Gi16-04-Cores.png',
  'https://i.ibb.co/nqXc07BR/Kit-Tintas-Original-Para-Canon-G3111-G3111-G4111-G4100-Gl190.png',
  'https://i.ibb.co/yFtfGVWY/Tinta-Epson-T534120-AL-preta.png'
];

async function downloadAndConvert() {
  for (const url of images) {
    const filename = url.split('/').pop().replace('.png', '.webp');
    const outputPath = path.join(__dirname, 'public', filename);
    
    console.log(`Downloading ${url}...`);
    
    await new Promise((resolve, reject) => {
      https.get(url, (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', async () => {
          const buffer = Buffer.concat(chunks);
          try {
            await sharp(buffer).webp({ quality: 90 }).toFile(outputPath);
            console.log(`Saved ${filename}`);
            resolve();
          } catch (e) {
            console.error('Error processing', filename, e);
            reject(e);
          }
        });
      }).on('error', reject);
    });
  }
}

downloadAndConvert().then(() => console.log('Done')).catch(console.error);
