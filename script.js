document.getElementById('search_1').addEventListener(
    'click', onSearch
)
document.getElementById('close_search').addEventListener(
    'click', onSearch
)

function onSearch(event) {
    event.preventDefault();
    search_input_box.classList.toggle('open');

}


let NewArray = document.querySelectorAll('.arrival_filter_item ul li')

for(let i = 0 ; i < NewArray.length ; i++)
{
 NewArray[i].addEventListener(
     'click' , onclickfilter
     
 )
}

function onclickfilter(event)
{
  for(let i = 0 ; i<NewArray.length; i++)
  {
     
    NewArray[i].classList.remove('active')
  }
  event.target.classList.add('active')


  let items = document.querySelectorAll('.single_arrivel_item')
  for (let i = 0; i < items.length; i++ ){
      items[i].classList.add('hidden')
  }


  let dataset = event.target.dataset;


  let itemsToDisplay = (dataset.filter) ? '' : dataset.toggle;

  let itemsDisplay = document.querySelectorAll('.single_arrivel_item' + itemsToDisplay)
  for (let i = 0; i < itemsDisplay.length; i++ ){
      items[i].classList.remove('hidden')
  }


}

let imagetoDisplay = document.querySelectorAll('.product_details')


///////////////////////////////////////////////////////////


imagetoDisplay[0].addEventListener('click',
Mainfunction)
function Mainfunction()
{
for( let i = 0 ; i <= imagetoDisplay.length-1 ; i++)
{
imagetoDisplay[i].addEventListener('click',
imagedetails)

function imagedetails()
{
    imagetoDisplay[i].style.display = 'none'

    if( i != imagetoDisplay.length-1)
    {
    
    imagetoDisplay[i+1].style.display = 'block'

    }
    else
    {

      i=-1
      imagetoDisplay[0].style.display = 'block'


    }

}

    
}

}
















// let NewArray = document.querySelectorAll('.arrival_filter_item ul li')

// for(let i = 0 ; i< NewArray.length;i++)
// {
//     NewArray[i].addEventListener('click'
//      , FilterItem)


// }

// function FilterItem(event)
// {

//     for(let i = 0 ; i < NewArray.length;i++)
//     {
//         NewArray[i].classList.remove('active')

//     }
//     event.target.classList.add('active')

//     let items = document.querySelectorAll('.new_arrival_iner .single_arrivel_item')
//     for (let i = 0; i < items.length; i++ ){
//         items[i].classList.add('hidden')
//     }
//     let dataset = event.target.dataset;

//     // (something) ?  true : false
//     // let itemsToDisplay = (dataset.filter) ? '' : dataset.toggle;
//     // .men, .women, .shoes
    

//     if (dataset.filter == '')
//     {
//         itemsToDisplay= ''
//     }
//     else
//     {
//         itemsToDisplay = dataset.toggle
//     }
//     let itemsDisplay = document.querySelectorAll('.new_arrival_iner .single_arrivel_item' + itemsToDisplay)
//     for (let i = 0; i < itemsDisplay.length; i++ ){
//         items[i].classList.remove('hidden')
//     }
// }
