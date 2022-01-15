class Footer{
    $container;
    $text;
    constructor(){
        this.$container = document.createElement('footer');
        this.$container.classList.add('footer');

        this.$text = document.createElement('h3');
        this.$text.innerHTML = 'Trang này được làm bởi Nguyễn Hải Nam';
    }

    render(){
        this.$container.appendChild(this.$text);
        return this.$container;
    }
}
export {Footer};