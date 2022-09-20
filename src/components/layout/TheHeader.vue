<template>
  <header>
   <nav>
      <h1><router-link to="/">Find a Coach</router-link></h1>
      <ul>
         <li><router-link class="btn-grad" to="/coaches">All Coaches</router-link></li>
          <li><router-link class="btn-grad" to="/requests">Requests</router-link></li>
      </ul>
   </nav>
  </header>
</template>

<style scoped>
header {
  font-family: 'Secular One', sans-serif;
  width: 100%;
  height: 5rem;
  background-color: var(--primary-dark);
  display: flex;
  justify-content: center;
  align-items: center;

}

header a {
  text-decoration: none;
  color: var(--secondary-color);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid var(--pink);
}
         
          /* .btn-grad {
            background-image: linear-gradient(to right, rgba(33, 25, 80, 0.1) 0%, rgba(215, 221, 232, 0.2)  51%, rgba(33, 25, 80, 0.1)  100%);
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
              color: var(--secondary-color);           
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; 
          } 
          */
         


h1 {
  margin: 0;
  font-size: 2.5rem;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>