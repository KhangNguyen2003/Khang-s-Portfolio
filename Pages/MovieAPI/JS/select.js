function activated(array){
    let posterList = document.querySelectorAll('.MovieCards');
    console.log(posterList)
        posterList.forEach((poster, index) => {
            poster.addEventListener('click', function() {
                deactivate();
                poster.classList.add('active');
                Populate(array[index])
            });
        });
}

function deactivate(){
    let posterList = document.querySelectorAll('.MovieCards');
    posterList.forEach((poster) => {
            poster.classList.remove('active');
        });
    }