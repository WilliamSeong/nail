<script setup lang="ts">
  
  import Nav from "../NavBar.vue";
  import Item from "./MenuItem.vue";

</script>

<template>

  <div class="theme-nordic">

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
  </div>
</template>

<style>

/* Color scheme variables */
:root {
  /* Primary colors */
  --primary-color: #4CAF50;
  --primary-light: #81C784;
  --primary-dark: #388E3C;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(76, 175, 80, 0.1);
  
  /* Text colors */
  --text-primary: #2C2C2C;
  --text-light: #FFFFFF;
  
  /* Overlay colors */
  --overlay-light: rgba(255, 255, 255, 0.9);
  --overlay-dark: rgba(0, 0, 0, 0.6);
}

/* Ocean Blue Theme */
.theme-ocean {
  /* Primary colors */
  --primary-color: #0277BD;
  --primary-light: #4FC3F7;
  --primary-dark: #01579B;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(2, 119, 189, 0.1);
}

/* Warm Sunset Theme */
.theme-sunset {
  /* Primary colors */
  --primary-color: #FF5722;
  --primary-light: #FFAB91;
  --primary-dark: #D84315;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(255, 87, 34, 0.1);
}

/* Lavender Theme */
.theme-lavender {
  /* Primary colors */
  --primary-color: #7E57C2;
  --primary-light: #B39DDB;
  --primary-dark: #4527A0;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(126, 87, 194, 0.1);
}

/* Modern Mint Theme */
.theme-mint {
  /* Primary colors */
  --primary-color: #26A69A;
  --primary-light: #80CBC4;
  --primary-dark: #00897B;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(38, 166, 154, 0.1);
}

/* Nordic Theme */
.theme-nordic {
  /* Primary colors */
  --primary-color: #546E7A;
  --primary-light: #90A4AE;
  --primary-dark: #37474F;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(84, 110, 122, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu-page {
  height: 100vh;
  width: 100vw;
  background: url("https://picsum.photos/seed/21/5000")
}

.menu-nav {
  background: var(--primary-light);
}

.menu-nav a,
.menu-nav h1 {
  color: var(--text-primary);
}

.menu-container {
  width: 100vw;
  height: auto;
  margin: 5vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-head {
  background: var(--primary-dark);
  background-image: linear-gradient(to right, var(--primary-dark), var(--primary-color));
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-head h1 {
  color: var(--text-light);
  font-family: 'Papyrus', fantasy;
}

.menu-body {
  width: 90%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.menu-left {
  background: var(--primary-light);
  height: 100%;
  padding: 10%;
  position: relative;
  z-index: 0;
}

.menu-manicure,
.menu-pedicure,
.menu-fullset,
.menu-fillin,
.menu-paraffin,
.menu-callus,
.menu-removal,
.menu-waxing {
  border-radius: 3%;
  border: 1px solid var(--text-primary);
  background: var(--overlay-light);
  padding: 5px;
  margin: 1vh;
}

.menu-middle {
  background: var(--primary-light);
  height: 100%;
  padding: 10%;
  position: relative;
  z-index: 0;
}

.menu-callus {
  display: flex;
  align-items: baseline;
}

.menu-right {
  background: var(--primary-light);
  height: 100%;
  padding: 10%;
  position: relative;
  z-index: 0;
  opacity: 0.9;
}

.menu-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  gap: 8px;
  align-items: baseline;
}

.item-name {
  color: var(--text-primary);
  font-family: 'Papyrus', fantasy;
}

.dots {
  border-bottom: 2px dotted var(--primary-dark);
  flex-grow: 1;
  position: relative;
  align-self: flex-end;
  margin-bottom: 0.5em;
}

.item-price {
  color: var(--text-primary);
  font-family: 'Papyrus', fantasy;
}

</style>
