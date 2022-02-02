import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

// Products
let headsetProducts = { 
  products: [
    {
      _id: uuid(),
      name: 'Steel Series: Arctis 9 Wireless',
      description: 'From the makers of the most award-winning headset line in gaming history, the Arctis 9 combines lossless low latency 2.4 GHz wireless with simultaneous Bluetooth audio for true wireless everywhere. With the noise-canceling ClearCast bidirectional microphone and stunningly detailed Arctis sound, the Arctis 9 is the premier all-day gaming headset.',
      stock: 10,
      price: '$199.99'
    },
    {
      _id: uuid(),
      name: 'EPOS H6Pro',
      description: 'With an open ear design for realistic in-game audio, the EPOS H6 Pro Open Back Headset creates an even more immersive gaming experience. Hear and be heard clearly without any distracting mic monitoring. This sebring black PC gaming headset provides the dynamic sound you need without compromising accuracy. The redesigned boom arm creates a sleek look and more varied placement options without compromising your voice pick-up experience. Streamers rejoice; the magnetic boom arm is conveniently detachable allowing you to use one dedicated microphone. Game for hours thanks to the game headset\'s two-axis ear cup hinges and cushioned headband for increased comfort.',
      stock: 13,
      price: '$179.99'
    }
  ]
}
let keyboardProducts = { 
  products: [
    {
      _id: uuid(),
      name: 'SteelSeries Apex Pro TKL',
      description: 'The apex pro TKL mechanical keyboard solves the shortcomings of gaming keyboards thanks to Omni point mechanical switches, which are for 100 million keypresses. Each individual key can be tweaked to meet your desired actuation, from the world\'s fastest feather light touches, to deep and typo-free presses, and anything in between, allowing you to play more accurately, quickly, and confidently. An integrated OLED smart display with on-board storage is your integrated command center for on-the-fly info from your game, music, or discord, and provides software-free customization for tweaking and saving your settings. An unbreakable aluminum alloy frame makes it the ultimate keyboard for enthusiasts who do not want to settle.',
      stock: 14,
      price: '$179.99'
    },
    {
      _id: uuid(),
      name: 'Ducky One 2 Mini',
      description: 'Featuring PBT double shot seamless keycaps with side laser engraving technique. Smaller size, but no functions sacrificed. Supports Ducky Macro V2.0 and Mouse control function. The new bezel design shares a similar sleek frame as it’s predecessor, but the One 2 Mini incorporates dual colors on the bezel to match all varieties of keycap colorways.',
      stock: 6,
      price: '$119.99'
    }
  ]
}
let miceProducts = { 
  products: [
    {
      _id: uuid(),
      name: 'Finalmouse Air58 Ninja',
      description: 'With Handmade Haiku Scrolls. Air and Art. Beautiful, like an ocean breeze flowing under your hand. 58 grams, should we say more? Words can\'t explain, must experience. It feels like air, in your hand. It makes the Ultralight feel heavy. It is the Air58. Hand painted and engraved Individualized Haiku Scrolls on every mouse. Beautiful Haikus from ancient masters. Some rare, some more common, your Haiku is unique to you. Find them all to uncover the treasure. The path will take you out into nature. Phantomcord is there also, to let the Air be free.',
      stock: 2,
      price: '$99.99'
    },
    {
      _id: uuid(),
      name: 'Logitech G Pro Wireless',
      description: 'Designed over two years with direct input from many professional esports players, Logitech G PRO Wireless Gaming Mouse is built to the exacting standards of some of the world\'s top esports professionals. PRO Wireless gaming mouse is purpose built for extreme performance and includes the latest and most advanced technologies available. Featuring Lightspeed technology, PRO Wireless overcomes the limitations of latency, connectivity and power to provide rock solid and super-fast 1 mms report rate connection. PRO Wireless gaming mouse is also equipped with the next generation version of the HERO sensor. HERO 16K is the highest performing and most power efficient gaming sensor that Logitech has ever made for pixel precise targeting in fps and mob games. An incredibly lightweight endoskeleton and ergonomic design improve maneuverability and comfort while removable side buttons and programmable LIGHTSYNC RGB lighting give you the ultimate in mouse customization.',
      stock: 4,
      price: '$99.99'
    }
  ]
}

// Categories
let gamingHeadsets = {
  name: 'Headset',
  description: 'Gaming headsets',
  productList: headsetProducts
}
let gamingKeyboards = {
  name: 'Keyboard',
  description: 'Gaming keyboard',
  productList: keyboardProducts
}
let gamingMice = {
  name: 'Mouse',
  description: 'Gaming mouse',
  productList: miceProducts
}

const initialState = {
  categories: [gamingMice, gamingKeyboards, gamingHeadsets],
  activeCategory: [] || null,
  activeProduct: [] || null,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setProduct: (state, action) => {
      console.log('action', action)
      state.activeProduct = action.payload;
    }
  },
});

export const { setCategory, setProduct } = categorySlice.actions;
export const selectCategory = (state) => state.category;
export default categorySlice.reducer;
