
const tabItems = document.querySelectorAll( '.tab-item' );
const tabContents = document.querySelectorAll( '.tab-content-item' );

//select tab content item

function selectItem ( e )
{
    console.log(this.id)
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add( 'tab-border' )
    //grab content item from the dom

    const tabContentItem = document.querySelector( `#${ this.id }-content` )
    console.log(tabContentItem)
    tabContentItem.classList.add('show')
}
function removeBorder ()
{
    tabItems.forEach(item=>item.classList.remove('tab-border'))
}

function removeShow ()
{
    tabContents.forEach( item => item.classList.remove( 'show' ) );
}

//listen for tab click
tabItems.forEach( item =>
{
    item.addEventListener( 'click', selectItem );
} )



