function mudarLuz(filename,luzName){

    document.querySelector('.imagem').setAttribute('src','image/'+filename)
    /*setAttribute adicionar um novo atributo 
    ou modifica o valoir de um atributo existente em um elemneto especifico*/
    document.querySelector('.imagem').setAttribute('data-luz',+luzName)
}