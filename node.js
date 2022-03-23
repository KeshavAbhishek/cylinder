document.getElementById('beforeMainFrame').addEventListener('click',()=>{
    html2canvas(document.getElementById("beforeMainFrame")).then(canvas => {
        document.getElementById('link').setAttribute('href',`${canvas.toDataURL('image/png')}`);
    });

    console.log(document.getElementById('link').click());
})