const canvas = document.getElementById('meme-canvas');
const ctx = canvas.getContext('2d');

const imageInput = document.getElementById('image-input');
const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');
const fontSizeInput = document.getElementById('font-size');
const fontSizeValue = document.getElementById('font-size-value');
const textColorSelect = document.getElementById('text-color');
const customColorInput = document.getElementById('custom-color');

const btnPreview = document.getElementById('btn-preview');
const btnGenerateGen = document.getElementById('btn-generate-gen')
const btnDownload = document.getElementById('btn-download');

const modeGenerator = document.getElementById('mode-generator');
const modeMemes = document.getElementById('mode-memes');
const mainGenerator = document.getElementById('main-generator');
const mainMemes = document.getElementById('main-memes');

const templatesDiv = document.getElementById('templates');
const memeGallery = document.getElementById('meme-gallery');
const btnGenerateMeme = document.getElementById('btn-generate-meme');

// === Библиотека мемов (рандом) ===
const memesLibrary = [
    { src: 'https://i.pinimg.com/736x/9e/e7/44/9ee74459b1df67ef7670ceff20628c3e.jpg', top: 'Когда ты', bottom: 'всё сделал' },
    { src: 'https://i.pinimg.com/736x/39/fc/6c/39fc6c8fc186d63e38adee09e27fc8bd.jpg', top: 'Я на утренке', bottom: 'без кофе' },
    { src: 'https://i.pinimg.com/1200x/85/13/53/851353ff0ee5f519b3fe4fce11a74217.jpg', top: 'Когда код', bottom: 'работает' },
    { src: 'https://i.pinimg.com/736x/55/71/e9/5571e9b8ef305c29bf700e036924a08c.jpg', top: 'Когда ты', bottom: 'всё забыл' },
    { src: 'https://i.pinimg.com/736x/9f/4e/6c/9f4e6c9eb5c478a6b4941abe46172fd4.jpg', top: 'Когда твой друг', bottom: 'сказал смешно' },
    { src: 'https://i.pinimg.com/736x/66/01/71/6601713f4386ca3aea4ac8f481dc2925.jpg', top: 'Мы спорим', bottom: 'о чём-то' },
    { src: 'https://i.pinimg.com/736x/a8/ff/13/a8ff133f29d74c11a0076256bd88aa22.jpg', top: 'Когда ты', bottom: 'грустишь' },
    { src: 'https://i.pinimg.com/736x/46/fa/a1/46faa1ecfab6109b6076024f4488c2fb.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/42/e7/a6/42e7a6865fa41149186547fdf1e9afbf.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/72/b4/e3/72b4e30d9ae3597d013aef8a81afe3ff.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/19/28/1e/19281e6d5222b14eb5c12d2e544b74b4.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/2d/48/fb/2d48fbffa3e36cb4aeb9d04b6d5c7db6.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/67/ed/0f/67ed0f58496c94e0f26bfef7fae9765c.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/55/bf/c9/55bfc9475173a7f2ca03a07ee3e2e60c.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/ab/90/2a/ab902ab389504c9389030cafa3f18e6a.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/82/23/8f/82238f3b7c57c895e4a63ec4df02b1f6.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/af/cc/57/afcc57c7b42d1061f0cdeb8433a4ee98.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/1200x/2b/43/ba/2b43ba572a35d8ca686a5ef3e387c41b.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/1200x/57/aa/96/57aa9656bbcc5c08fb48475042b91c07.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/bd/b9/5a/bdb95a8b4849e425bd2dd0ef2e74ac0f.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/a1/30/2e/a1302e1c97f088e4530fe481b0ac44ad.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/5b/0c/06/5b0c06eabeb230a4d630b009f0356bdb.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/d1/1b/f6/d11bf6ba15563c514c1fe370895c7e65.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/12/77/e6/1277e6d97869f120d36c12f5a7ac0cb4.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/02/48/24/024824344ebff19137c373524fa6ad3d.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/1200x/b6/56/73/b6567309b4df60a5c97c71d4de55f129.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/1200x/7f/15/4f/7f154f2a8ec7ac1626d94f11ee01b14b.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/736x/f3/74/e1/f374e1a5994b8a94c9f15ab83998906d.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: 'https://i.pinimg.com/1200x/7d/7b/78/7d7b78028e8ad28a8f427a621f6f38f5.jpg', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
    { src: '', top: 'Когда ты', bottom: 'удивлён' },
];  

let currentImage = null;

// === Снежинки (летят с самого верха) ===
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    for (let i = 0; i < 30; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = '❄';
        flake.style.left = Math.random() * 100 + '%';
        flake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        flake.style.animationDelay = Math.random() * 5 + 's';
        flake.style.fontSize = (Math.random() * 1.5 + 0.8) + 'em';
        snowflakesContainer.appendChild(flake);
    }
}
// === Переключение режимов ===
modeGenerator.addEventListener('click', () => {
    modeGenerator.classList.add('active');
    modeMemes.classList.remove('active');
    mainGenerator.style.display = 'block';
    mainMemes.style.display = 'none';
});

modeMemes.addEventListener('click', () => {
    modeMemes.classList.add('active');
    modeGenerator.classList.remove('active');
    mainMemes.style.display = 'block';
    mainGenerator.style.display = 'none';
});

// === Библиотека шаблонов ===
const templatesData = [
    { src: 'https://sun9-3.userapi.com/s/v1/ig2/eSrPDIY4MBIkcEHEMQgAxGfVBJy0lWMliBQl31UMYVKZqBZXGrFmkuaD8pnzDPo1GL9Z6cQo0EKZVpijiNyk0dIn.jpg?quality=95&as=32x43,48x65,72x98,108x147,160x218,240x326,360x489,480x653,540x734,640x870,720x979,734x998&from=bu&u=9uC09jx8qdt2wMk2UMibkl7-dkuVAOqFWpZZ-vP2ntE&cs=734x0' },
    { src: 'https://sun9-54.userapi.com/s/v1/ig2/0Ss3G0nPdV2VE-fDiWc5zRm4ZUxUU8tCu7hTCYzzNiYkKMulc3aINzCBir3DKC3YN4NArciQt9MOQc7AVvCjCJra.jpg?quality=95&as=32x54,48x81,72x122,108x183,160x270,240x406,360x608,426x720&from=bu&u=9bejGK-8AD5A7DKuVEkIxGJL4Ns5fQh9c1AlhUR3e-A&cs=426x0' },
    { src: 'https://sun9-64.userapi.com/s/v1/ig2/D7IbfswdgmlzRbqK1Fqo4lFxjg_OJfNUNWbxDsAjTYM3YopOgEhWAZUgt7YV1BnT5kdWz3TNCTAJYBkBqSJuIJt1.jpg?quality=95&as=32x25,48x38,72x57,108x85,160x126,240x189,360x283,480x377,540x425,640x503,720x566,735x578&from=bu&u=Gqm9xOqp2XrPJNm_WBXvsdIg7aYYH5Y7OT5KdAtXVYM&cs=735x0' },
    { src: 'https://i.pinimg.com/1200x/f2/33/28/f23328c9a71eedd94ac45086586f015d.jpg' },
    { src: 'https://i.pinimg.com/736x/cf/2b/a7/cf2ba7b618e7f0c61ba6ccef178ccf62.jpg' },
    { src: 'https://i.pinimg.com/1200x/a9/fc/ad/a9fcad37b2ea1a7dc2592793c53dbe5d.jpg' },
    { src: 'https://i.pinimg.com/1200x/f8/c7/4e/f8c74ea69c5402d92bc96ff35e56b745.jpg' },
    { src: 'https://sun9-88.userapi.com/s/v1/ig2/rW_ihb6Hhv33xfZwxcVkxKmuxp5khZciCb1LMS5_nBESNaobssXl3PcTOaMp9LwYwUer8U3TFGSJeG4DHq5OaiJm.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x161,240x241,360x361,480x482,540x542,640x643,720x723,736x739&from=bu&u=8mPd56Vu9jqZOg9kGWsMBGAWit6wib6xt2BpkUOf3FM&cs=736x0' }
];

function initTemplates() {
    templatesDiv.innerHTML = '';
    templatesData.forEach(t => {
        const div = document.createElement('div');
        div.className = 'template';
        const img = document.createElement('img');
        img.src = t.src;
        img.alt = 'Template';
        div.appendChild(img);
        div.addEventListener('click', () => loadImageFromUrl(t.src));
        templatesDiv.appendChild(div);
    });
}

// === Загрузка изображения ===
imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        const img = new Image();
        img.onload = () => {
            currentImage = img;
            resizeCanvas();
            render();
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(file);
});

function loadImageFromUrl(url) {
    const img = new Image();
    img.onload = () => {
        currentImage = img;
        resizeCanvas();
        render();
    };
    img.src = url;
}

function resizeCanvas() {
    if (!currentImage) return;
    canvas.width = currentImage.width;
    canvas.height = currentImage.height;
}

function getTextColor() {
    if (textColorSelect.value === 'custom') {
        return customColorInput.value;
    }
    return textColorSelect.value;
}

textColorSelect.addEventListener('change', () => {
    customColorInput.style.display = textColorSelect.value === 'custom' ? 'inline-block' : 'none';
});

fontSizeInput.addEventListener('input', () => {
    fontSizeValue.textContent = fontSizeInput.value;
    render();
});

// === Рендер ===
function render() {
    if (!currentImage) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ccc';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Загрузите изображение или выберите шаблон', canvas.width/2, canvas.height/2);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);

    const fontSize = parseInt(fontSizeInput.value);
    const fontFamily = 'Impact';
    const textFill = getTextColor();
    const textStroke = 'black';
    const lineWidth = Math.max(2, fontSize * 0.08);

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = textStroke;
    ctx.fillStyle = textFill;

    const topText = topTextInput.value;
    if (topText) {
        const y = 10;
        ctx.strokeText(topText, canvas.width/2, y);
        ctx.fillText(topText, canvas.width/2, y);
    }

    const bottomText = bottomTextInput.value;
    if (bottomText) {
        const y = canvas.height - fontSize - 10;
        ctx.textBaseline = 'bottom';
        ctx.strokeText(bottomText, canvas.width/2, y);
        ctx.fillText(bottomText, canvas.width/2, y);
    }
}

// Получаем элементы
const canvas = document.getElementById('meme-canvas');
const ctx = canvas.getContext('2d');

const imageInput = document.getElementById('image-input');
const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');
const fontSizeInput = document.getElementById('font-size');
const textColorSelect = document.getElementById('text-color');
const customColorInput = document.getElementById('custom-color');

const btnPreview = document.getElementById('btn-preview');
const btnGenerateGen = document.getElementById('btn-generate-gen');
const btnDownload = document.getElementById('btn-download');

let currentImage = null;

// Загрузка изображения с компьютера
imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        const img = new Image();
        // ВАЖНО: локальный файл не даёт tainted, можно без crossOrigin
        img.onload = () => {
            currentImage = img;
            canvas.width = img.width;
            canvas.height = img.height;
            render();
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(file);
});

// Цвет текста
function getTextColor() {
    return textColorSelect.value === 'custom'
        ? customColorInput.value
        : textColorSelect.value;
}

// Отрисовка мема
function render() {
    if (!currentImage) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);

    const fontSize = parseInt(fontSizeInput.value);
    const fontFamily = 'Impact';
    const textFill = getTextColor();
    const textStroke = 'black';
    const lineWidth = Math.max(2, fontSize * 0.08);

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = textStroke;
    ctx.fillStyle = textFill;

    const topText = topTextInput.value;
    if (topText) {
        ctx.textBaseline = 'top';
        ctx.strokeText(topText, canvas.width / 2, 10);
        ctx.fillText(topText, canvas.width / 2, 10);
    }

    const bottomText = bottomTextInput.value;
    if (bottomText) {
        ctx.textBaseline = 'bottom';
        const y = canvas.height - 10;
        ctx.strokeText(bottomText, canvas.width / 2, y);
        ctx.fillText(bottomText, canvas.width / 2, y);
    }
}

// Предпросмотр (просто перерисовка)
btnPreview.addEventListener('click', () => {
    if (!currentImage) {
        alert('Сначала загрузите изображение.');
        return;
    }
    render();
});

// «Сгенерировать» — просто разблокируем скачивание
btnGenerateGen.addEventListener('click', () => {
    if (!currentImage) {
        alert('Сначала загрузите изображение.');
        return;
    }
    btnDownload.disabled = false;
    alert('Мем готов. Теперь можно скачать.');
});

// КНОПКА СКАЧИВАНИЯ
btnDownload.addEventListener('click', () => {
    if (!currentImage) {
        alert('Сначала загрузите изображение.');
        return;
    }

    try {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'meme.png';
        document.body.appendChild(link);
        link.click();
        link.remove();
    } catch (e) {
        alert('Ошибка при скачивании: ' + e.message);
    }
});

// Перерисовка при изменении параметров
topTextInput.addEventListener('input', render);
bottomTextInput.addEventListener('input', render);
fontSizeInput.addEventListener('input', render);
textColorSelect.addEventListener('change', render);
customColorInput.addEventListener('input', render);

// === Рандомный мем ===
btnGenerateMeme.addEventListener('click', () => {
    const randomMeme = memesLibrary[Math.floor(Math.random() * memesLibrary.length)];
    currentImage = null;
    topTextInput.value = randomMeme.top;
    bottomTextInput.value = randomMeme.bottom;

    const img = new Image();
    img.onload = () => {
        currentImage = img;
        resizeCanvas();
        render();

        const card = document.createElement('div');
        card.className = 'meme-card';
        const memeImg = document.createElement('img');
        memeImg.src = canvas.toDataURL('image/png');
        card.appendChild(memeImg);
        memeGallery.appendChild(card);
    };
    img.src = randomMeme.src;
});

// === Инициализация ===
initTemplates();
createSnowflakes();
render();
canvas.addEventListener('click', (e) => {
    if (!currentImage) {
        alert('Загрузите изображение или выберите шаблон!');
        return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const scale = canvas.width / rect.width;
    x *= scale;
    y *= scale;

    const newText = prompt('Введите текст:');
    if (!newText) return;

    const fontSize = parseInt(fontSizeInput.value);
    const fontFamily = 'Impact';
    const textFill = getTextColor();
    const textStroke = 'black';
    const lineWidth = Math.max(2, fontSize * 0.08);

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = textStroke;
    ctx.fillStyle = textFill;

    ctx.strokeText(newText, x, y);
    ctx.fillText(newText, x, y);
});

