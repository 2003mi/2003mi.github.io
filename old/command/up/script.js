// surce https://www.youtube.com/watch?v=-AR-6X_98rM&list=WL&index=12&t=0s

const input = document.querySelector('input[type="file"]')

/*input.addEventListener ('change', function (e){
    console.log(input.files);
    const reader = new FileReader();
    reader.onload = function (){
        console.log(reader.result);
    };
    reader.readAsText(input.files[0]);
}, false);*/

/*input.addEventListener ('change', function (e){
    console.log(input.files);
    const reader = new FileReader();
    reader.onload = function (){
        const lines = reader.result.split('\n').map(function (line){
            return line.split(',')
        })
        console.log(lines)
    };
    reader.readAsText(input.files[0]);
}, false);*/

/*input.addEventListener ('change', function (e){
    console.log(input.files);
    const reader = new FileReader();
    reader.onload = function (){
        const img = new Image();
        img.onload = function(){
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            context.drawImage(img, 0, 0)

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            for (var i = 0; i <= data.length; i += 4) {
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
                data[i] = avg
                data[i + 1] = avg
                data[i + 2] = avg
            }
            context.putImageData(imageData, 0, 0)

            //document.body.appendChild(canvas);
            //canvas.toDataURL();
            //const csvfile = new Blob(['one,two,three', { type: 'text/csv' }])
            canvas.toBlob(function (blob){
                const form = new FormData()
                form.append('image', blob, 'moody.jpg')
                const xhr = new XMLHttpRequest()
                xhr.open('POST', '/imageupload', true)
                xhr.send(form)
            })
        }

        img.src = reader.result;
        //document.body.appendChild(img)
    };
    //reader.readAsText(input.files[0]);
    reader.readAsDataURL(input.files[0]);
}, false);*/

function handleFiles(files){
    console.log(files);
    const reader = new FileReader();
    reader.onload = function (){
        const img = new Image();
        img.onload = function(){
            document.body.appendChild(convertImageToCanvas(img));
            console.log(img.width, img.height, img)

            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            context.drawImage(img, 0, 0)


            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            for (var i = 0; i <= data.length; i += 4) {
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
                data[i] = avg
                data[i + 1] = avg
                data[i + 2] = avg
            }
            context.putImageData(imageData, 0, 0)

            document.body.appendChild(canvas);
            document.body.appendChild(convertCanvasToImage(canvas))
            //canvas.toDataURL();
            //const csvfile = new Blob(['one,two,three', { type: 'text/csv' }])
            /*canvas.toBlob(function (blob){
                const form = new FormData()
                form.append('image', blob, 'moody.jpg')
                const xhr = new XMLHttpRequest()
                xhr.open('POST', '/imageupload', true)
                xhr.send(form)
            })*/
        }

        img.src = reader.result;
        document.body.appendChild(img)
    };
    //reader.readAsText(input.files[0]);
    reader.readAsDataURL(files[0]);
}

input.addEventListener('change', function (e) {
    handleFiles(input.files)
}, false)

document.addEventListener('dragover', function (e){
    e.preventDefault()
    e.stopPropagation()
}, false)
document.addEventListener('drop', function (e){
    e.preventDefault()
    e.stopPropagation()
    handleFiles(e.dataTransfer.files)
}, false)

// Converts image to canvas; returns new canvas element
function convertImageToCanvas(image) {
    var canvas = document.createElement("canvas");
    console.log(image.width, image.height)
	canvas.width = image.width;
	canvas.height = image.height;
	canvas.getContext("2d").drawImage(image, 0, 0);

	return canvas;
}

// Converts canvas to an image
function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}