export default function navbar() {
  return `<div id="navbar">
    <div id="top-banner">
      <div id="left"></div>
      <div id="center">
        <div id="faballey-img">
          <img
            src="https://static.faballey.com/images/indya/fabwht.png?v=11.39"
            alt=""
          />
        </div>
        <div id="indya">
          <img
            src="https://static.faballey.com/images/indya/indblk.png?v=11.39"
            alt=""
          />
        </div>
      </div>
      <div id="right">
        <a href="">Track Order |</a>
        <a href="">Store Locator |</a>
        <a href="">Login |</a>
        <a href="">Sign up |</a>
        <a id="navbar-cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M208.8,72H47.2a8.1,8.1,0,0,0-8,7.1L25,207.1a8,8,0,0,0,7.9,8.9H223.1a8,8,0,0,0,7.9-8.9l-14.2-128A8.1,8.1,0,0,0,208.8,72Z"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <path
              d="M88,104V72a40,40,0,0,1,80,0v32"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
          </svg>
          <p><span id="navbar-cart-count">5</span></p>
        </a>
      </div>
    </div>
  </div>
  <div id="navbar-mid">
    <img
      class="logo-fab"
      src="https://static.faballey.com/images/logo.png?v=11.39"
      alt=""
    />
    <div id="navbar-mid-mid">
      <div class="dropdown">
        <a href="" class="dropbtn">NEW IN</a>
        <div class="dropdown-content">
          <div class="flexxxxx newin-main">
            <div class="newin">
              <p>Clothing</p>
              <p>Curve</p>
              <p>Accessories</p>
              <p>Bestselling</p>
            </div>
            <img
              class="newin-img"
              src="https://img.faballey.com/images/menu/newinsmenuimg1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">RIMZIM DADI-J X FABALLEY</a>
        <div class="dropdown-content flexxxxx">
          <div class="flexxxxx newin-main">
            <div class="newin">
              <p>Shop The Collection</p>
              <p>Explore The Lookbook</p>
            </div>
            <img
              class="newin-img"
              src="https://img.faballey.com/images/menu/aw22rdmenuimg1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <a href="#">WINTERWEAR</a>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">CLOTHING</a>
        <div class="dropdown-content flexxxxx">
          <div class="cloth-main-div">
          <div class="clothing-left">
            <p>Tops</p>
            <p>Dresses</p>
            <p>Co-ords</p>
            <p>Skirts</p>
            <p>Bottoms</p>
            <p>Basics</p>
            <p>Classics</p>
            <p>Workwear</p>
            <p>Loungewear</p>
            <p>Winterwear</p>
            <p class="hover-heading">AW '22</p>
          </div>

          <div class="clothing-mid">
            <p class="hover-heading">SHOP BY OCCASION</p>
            <p>Party</p>
            <p>Vacation</p>
            <p>Work</p>
            <p>Loungewear</p>
            <p class="hover-heading">CURVE</p>
            <p>Tops</p>
            <p>Dresses</p>
          </div>
          <div class="clothing-right">
            <p class="hover-heading">SHOP BY TRENDS</p>
            <p>The New Florals</p>
            <p>Colours of Fall</p>
            <p>Belt up</p>
            <p>Clean & Sharp</p>
            <p>Cool Cut Outs</p>
            <p>Frills & Ruffles</p>
            <p>Statement Textures</p>
            <p>Delicate Lace</p>
          </div>
        </div>
        </div>
      </div>

      <div class="dropdown">
        <a href="#" class="dropbtn">TOPS</a>
        <div class="dropdown-content flexxxxx">
          <div class="tops-main">
          <div class="tops-left">
            <p class="hover-heading">SHOP BY STYLE</p>
            <p>Crop Tops</p>
            <p>Tank Tops</p>
            <p>T-Shirts</p>
            <p>Shirts</p>
            <p>Blouses</p>
            <p>Maxi Tops</p>
            <p>Peplum Tops</p>
            <p>Wrap Tops</p>
            <p>AW '22</p>
          </div>

          <div class="tops-mid">
            <p class="hover-heading">SHOP BY TRENDS</p>
            <p>The New Florals</p>
            <p>Colours of Fall</p>
            <p>Belt up</p>
            <p>Clean & Sharp</p>
            <p>Cool Cut Outs</p>
            <p>Frills & Ruffles</p>
            <p>Statement Textures</p>
            <p>Delicate Lace</p>
          </div>

          <div class="tops-right">
            <p class="hover-heading">SHOP BY OCCASION</p>
            <p>Casual Tops</p>
            <p>Party Tops</p>
            <p>Work Tops</p>
          </div>
          <img class="tops-img"
            src="https://img.faballey.com/images/menu/topmenuimg1.jpg"
            alt=""
          />
        </div>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">DRESSES</a>
        <div class="dropdown-content flexxxxx">
          <div class="tops-main">
          <div class="dress-left tops-left">
            <p class="hover-heading">SHOP BY STYLE</p>
            <p>Bodycon Dresses</p>
            <p>A-Line Dresses</p>
            <p>Maxi Dresses</p>
            <p>Midi Dresses</p>
            <p>Mini Dresses</p>
            <p>Skater Dresses</p>
            <p>Shift Dresses</p>
            <p>Shirt Dresses</p>
          </div>
          <div class="dress-mid tops-mid">
            <p class="hover-heading">SHOP BY TRENDS</p>
            <p>The New Florals</p>
            <p>Colours of Fall</p>
            <p>Belt up</p>
            <p>Clean & Sharp</p>
            <p>Cool Cut Outs</p>
            <p>Frills & Ruffles</p>
            <p>Statement Textures</p>
            <p>Delicate Lace</p>
          </div>
          <div class="dress-right tops-right">
            <p class="hover-heading">SHOP BY OCCASION</p>
            <p>Casual Dress</p>
            <p>Party Dress</p>
            <p>Work Dress</p>
          </div>
          <img class="tops-img"
            src="https://img.faballey.com/images/menu/dressesmenuimg1.jpg"
            alt=""
          />
          </div>
        </div>
      </div>
      <div>
        <a href="#">CO-ORDS</a>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">PARTYWEAR</a>
        <div class="dropdown-content">
          <div class="flexxxxx newin-main">
            <div class="newin">
              <p>Shop The Collection</p>
              <p>Explore The Lookbook</p>
            </div>
            <img
              class="newin-img"
              src="https://img.faballey.com/images/menu/fapartywear.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <a href="#">CURVE</a>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn">LOOKBOOKS</a>
        <div class="dropdown-content">
          <div class="flexxxxx newin-main">
            <div class="newin">
              <p>RIMZIM DADU X FABALLEY</p>
              <p>PARTY'22 - Lights.Camera.Shine.</p>
              <p>AW'22 - That Fall Feeling</p>
              <p>SS'22 - Girls Just Wanna Have Sun</p>
            </div>
            <img
              class="newin-img"
              src="https://img.faballey.com/images/menu/lkbkmenuimg1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" class="dropbtn" style="color: #fc6486;">SALE</a>
        <div class="dropdown-content">
          <div class="flexxxxx sale-main">
            <div class="sale-m">
            <div class="sale-left">
              <p>Clearance</p>
              <p>Under ₹699</p>
              <p>Under ₹799</p>
              <p>Under ₹999</p>
              <p>2 Dresses at 1800</p>
              <p>2 Tops at 999</p>
              <p>Shop The Collection</p>
              <p>Explore The Lookbook</p>
            </div>
            <img
              class="sale-img"
              src="https://img.faballey.com/images/clearance-saledpnv2.jpg"
              alt=""
            />
            <img
              class="sale-img"
              src="https://img.faballey.com/images/699saleundr.jpg"
              alt=""
            />
            <img
              class="sale-img"
              src="https://img.faballey.com/images/799saleundr.jpg"
              alt=""
            />
            <img
              class="sale-img"
              src="https://img.faballey.com/images/999saleundr.jpg"
              alt=""
            />
          </div>
          </div>
        </div>
      </div>
    </div>
    <form role="search" class="search-form">
      <input
        type="search"
        name="q"
        class="search-text"
        placeholder="Search..."
        autocomplete="off"
      />
      <input type="submit" value="" class="search-submit" />
      <div id="mic">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-mic"
        >
          <path
            d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
          ></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      </div>
    </form>
    <select name="currency" id="currency">
      <option>₹ INR</option>
      <option>$ USD</option>
      <option>$ CAD</option>
      <option>£ GBP</option>
      <option>$ SGD</option>
      <option>$ AUD</option>
      <option>د.إ AED</option>
      <option>﷼ SAR</option>
      <option>€ EURO</option>
    </select>
  </div>
  <div id="nav-bottom">
    <div>Party'22 | Shop Now</div>
    <div>Sale | Upto off</div>
    <div>Free shipping on all orders</div>
  </div>`;
}
