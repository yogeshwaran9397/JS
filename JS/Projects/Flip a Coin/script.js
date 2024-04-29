let randomNum = Math.floor(Math.random() * 2);
document.querySelector('.flip').addEventListener('click',function()
{
    console.log(randomNum);
    if(randomNum === 1)
    {
        document.querySelector('.coinImage').setAttribute('src','Images/head.jpg');
    }
    else 
    {
        document.querySelector('.coinImage').setAttribute('src','Images/tail.jpg');
    }
});