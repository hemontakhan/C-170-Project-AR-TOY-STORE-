AFRAME.registerComponent('marker-detector',{
 init:async function(){
   
  this.el.addEventListener('markerFound',() => {
      console.log('marker is detected')
      this.handleMarkerDetect();
  })

  this.el.addEventListener('markerLost',() => {
      console.log('marker is lost')
      this.handleMarkerLost();
  })
 },
 handleMarkerDetect: function(){
   var buttonDiv = document.getElementById('button-div');
   buttonDiv.style.display = 'flex';
 
   var summaryButton = document.getElementById('summary-button');
   var purchaseButton = document.getElementById('purchasing-button');

   summaryButton.addEventListener('click',function(){
       swal({
           icon : 'warning',
           title : 'Summary',
           text : 'Price- ₹500'
       })
   })

   purchaseButton.addEventListener('click',function(){
       swal({
         icon : 'https://imgur.com/4NZ6uLY',
         title: 'Order',
         text: 'Your order will reach to you soon'
       })
   })

 }
})