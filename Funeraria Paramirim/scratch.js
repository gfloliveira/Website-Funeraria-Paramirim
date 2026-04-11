const fs = require('fs');

const originalPath = 'projeto funeraria paramirim.html';
const newPath = 'Projeto funeraria paramirim atualizado.html';

let html = fs.readFileSync(originalPath, 'utf8');

// Add font-face and custom class
const fontInjection = `/* --- CORE --- */
        @font-face {
            font-family: 'Birds of Paradise';
            src: url('Fontes/Birds of Paradise © PERSONAL USE ONLY.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        .font-hero-custom {
            font-family: 'Birds of Paradise', cursive;
            font-weight: normal;
            font-style: normal;
            line-height: normal;
        }
        
        .font-hero-custom span {
            letter-spacing: normal !important;
            padding-bottom: 5px; /* prevent descender cutoff */
        }`;

html = html.replace('/* --- CORE --- */', fontInjection);

// Replace the specific text block
const searchStr = `<div style="-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 40%); mask-image: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 40%); padding-bottom: 0.5rem;" class="flex flex-col items-center">
                    <h1 class="font-display text-4xl md:text-[5.5vw] leading-[1.1] md:leading-[0.85] hero-text overflow-hidden relative z-10">
                        <span class="block translate-y-full tracking-wide text-offwhite text-shadow-lg shadow-black">Acolhimento</span>
                    </h1>
                    <h2 class="font-display text-3xl md:text-[3.5vw] leading-[1.1] md:leading-[0.8] hero-text overflow-hidden my-1 md:my-0 relative z-20">
                        <span class="block translate-y-full tracking-wide text-offwhite text-shadow-lg shadow-black">no</span>
                    </h2>
                    <h1 class="font-display text-4xl md:text-[5.5vw] leading-[1.1] md:leading-[0.95] hero-text overflow-hidden italic relative z-10">
                        <span class="block translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">momento de</span>
                    </h1>
                    <h1 class="font-display text-4xl md:text-[5.5vw] leading-[1.1] md:leading-[0.95] hero-text overflow-hidden italic">
                        <span class="block translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">despedida</span>
                    </h1>
                </div>`;

const replaceStr = `<div style="-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 40%); mask-image: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 40%); padding-bottom: 0.5rem;" class="flex flex-col items-center">
                    <h1 class="font-hero-custom text-[4rem] md:text-[10vw] leading-[1] md:leading-[0.85] hero-text overflow-hidden relative z-10">
                        <span class="block translate-y-full text-offwhite text-shadow-lg shadow-black pb-4 pr-2">Acolhimento</span>
                    </h1>
                    <h2 class="font-hero-custom text-[3rem] md:text-[7vw] leading-[1] md:leading-[0.8] hero-text overflow-hidden my-3 md:my-1 relative z-20">
                        <span class="block translate-y-full text-offwhite text-shadow-lg shadow-black pb-4 pr-1">no</span>
                    </h2>
                    <h1 class="font-hero-custom text-[4rem] md:text-[10vw] leading-[1] md:leading-[0.95] hero-text overflow-hidden relative z-10">
                        <span class="block translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 pb-4 pr-2">momento de</span>
                    </h1>
                    <h1 class="font-hero-custom text-[4rem] md:text-[10vw] leading-[1] md:leading-[0.95] hero-text overflow-hidden">
                        <span class="block translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 pb-4 pr-2">despedida</span>
                    </h1>
                </div>`;

html = html.replace(searchStr, replaceStr);

fs.writeFileSync(newPath, html, 'utf8');
console.log('Done creating updated html file!');
