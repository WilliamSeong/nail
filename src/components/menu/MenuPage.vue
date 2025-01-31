<script setup lang="ts">
  
  import Nav from "../NavBar.vue";
  import Item from "./MenuItem.vue";

</script>

<template>

  <div class="menu-page">
    <div class="menu-nav">
      <Nav />
    </div>


    <div class="menu-container">
      
      <div class="menu-head">
        <h1>Services</h1>
      </div>

      <div class="menu-body">
        <div class="menu-left">
          <!-- Manicure Section -->
          <div class="menu-manicure">
            <h1>Manicure</h1>
            <Item name="Manicure" price="20"/>
            <Item name="French Manicure" price="25"/>
            <Item name="Buffin Manicure" price="25"/>
            <Item name="Change Polish" price="13"/>
            <Item name="Soak Off Color Gel Manicure" price="39"/>
            <Item name="Soak Off French Gel Manicure" price="48"/>
            <Item name="Spa Manicure" price="35"/>
            <Item name="Kid's Manicure (under 9yr)" price="13"/>
          </div>

          <!-- Pedicure Section -->
          <div class="menu-pedicure">
            <h1>Pedicure</h1>
            <Item name="Pedicure" price="30"/>
            <Item name="French Pedicure" price="35"/>
            <Item name="Buffing Pedicure" price="35"/>
            <Item name="Change Polish" price="15"/>
            <Item name="Soak off Color Gel Pedicure" price="48"/>
            <Item name="Soak off French Gel Pedicure" price="58"/>
            <Item name="Spa Pedicure" price="65"/>
            <Item name="Organic Spa Pedicure (All Natural)" price="80"/>
            <Item name="Kid's Pedicure" price="20"/>
          </div>
        </div>

        <div class="menu-middle">
          <!-- Full Set Section -->
          <div class="menu-fullset">
            <h1>Full Set</h1>
            <Item name="Tip with UV GEL" price="90"/>
            <Item name="UV Gel Plain" price="85"/>
            <Item name="UV Gel with Permanent French" price="100"/>
            <Item name="Tip with Permanent French UV Gel" price="110"/>
          </div>

          <!-- Fill In Section -->
          <div class="menu-fillin">
            <h1>Fill In</h1>
            <Item name="UV Gel with French" price="80"/>
            <Item name="UV Gel Fill Ins" price="60"/>
          </div>

          <!-- Paraffin Treatment Section -->
          <div class="menu-paraffin">
            <h1>Paraffin Treatment</h1>
            <Item name="Hands" price="13"/>
            <Item name="Feet" price="15"/>
          </div>

          <!-- Callus Elimination Section -->
          <div class="menu-callus">
            <h1>Callus Elimination</h1>
            <span class="dots"></span>
            <span class="item-price">$15</span>
          </div>

          <!-- Removal Section -->
          <div class="menu-removal">
            <h1>Removal</h1>
            <Item name="Soak off Color Gel" price="8"/>
            <Item name="Hard Gel" price="20"/>
          </div>
        </div>

        <div class="menu-right">
          <!-- Waxing Section -->
          <div class="menu-waxing">
            <h1>Waxing</h1>
            <Item name="Eyebrows" price="15"/>
            <Item name="Lips" price="12"/>
            <Item name="Chin" price="13"/>
            <Item name="Cheeks" price="18"/>
            <Item name="Under Arm" price="17"/>
            <Item name="Full Arm" price="35"/>
            <Item name="Half Arm(Upper)" price="18"/>
            <Item name="Half Arm(Lower)" price="22"/>
            <Item name="Full Leg" price="40"/>
            <Item name="Half Leg(Knee Up)" price="23"/>
            <Item name="Half Leg(Knee Down)" price="22"/>
            <Item name="Bikini" price="20"/>
            <Item name="Semi-Brazilian (Leave a Landing Strip)" price="40"/>
            <Item name="Brazilian Bikini (Take It off All)" price="42"/>
            <Item name="Butt" price="15"/>
            <Item name="Belly" price="20"/>
            <Item name="All Toes (Fingers)" price="13"/>
            <Item name="Chest" price="37"/>
            <Item name="Back" price="45"/>
            <Item name="Shoulder" price="20"/>
            <Item name="Neck" price="20"/>
            <Item name="Whole Face" price="48"/>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<style>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* outline: 1px red solid; */
  }

  .menu-page{
    height: 100vh;
    width: 100vw;
    background: url("https://picsum.photos/seed/21/5000")
  }

  .menu-nav:hover .menu-page{
    background:rgb(161, 229, 164)
  }

  .menu-container{
    width: 100vw;
    height: auto;
    margin: 5vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  

  .menu-head{
    background: rgb(74, 93, 63);
    background-image: linear-gradient(to right,rgb(74, 93, 63), rgb(114, 135, 101));
    width: 90%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-head h1{
    color: white;
  }

  .menu-body{
    width: 90%;
    height: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .menu-left{
    background: rgb(161, 229, 164);
    height: 100%;
    padding: 10%;
    position: relative;
    z-index: 0
  }

  .menu-manicure,
  .menu-pedicure,
  .menu-fullset,
  .menu-fillin,
  .menu-paraffin,
  .menu-callus,
  .menu-removal,
  .menu-waxing{
    border-radius: 3%;
    border-color: black;
    background: rgba(255, 255, 255, 0.6);
    padding: 5px;
    margin: 1vh;
  }

  .menu-middle{
    background: beige;
    height: 100%;
    padding: 10%;
    position: relative;
    z-index: 0
  }

  .menu-callus{
    display: flex;
    align-items: baseline;
  }

  .menu-right{
    background: pink;
    height: 100%;
    padding: 10%;
    position: relative;
    z-index: 0
  }

  .menu-item{
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    gap: 8px;
    align-items: baseline;
  }

  .item-name{
    color: black;
  }

  .dots{
    border-bottom: 2px dotted #999;
    flex-grow: 1;
    position: relative;
    align-self: flex-end;
    margin-bottom: 0.5em;
  }

  .item-price{
    color: black;
  }

</style>
