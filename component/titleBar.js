class TitleBar{
    $container;
    $txtName;
    $btnLogout;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('title-bar');

        this.$txtName = document.createElement('div');
    }
    setName(name){
        this.$txtName.innerHTML = name;
    }
    render(){
        this.$container.appendChild(this.$txtName);
        return this.$container;
    }
}
export {TitleBar};