import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

// Context/Situation #1
// Running in development in isolation
// We are using our local index.html file
// We definitely has an element with an id of 'cart-dev'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');

  // Assuming our container doesn't have an element
  // with id 'dev-products'.
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// Running in development or production through a container app
// No gurantee that an element with an specific id exists
// We don't want to immediately render the app
export { mount };
