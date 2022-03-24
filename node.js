document.getElementById('mainFrame').addEventListener('click',()=>{
    html2canvas(document.getElementById("container"),{dpi:300}).then(canvas => {
        document.getElementById('link').setAttribute('href',`${canvas.toDataURL('image/png')}`);
    });

    document.getElementById('link').click();
})