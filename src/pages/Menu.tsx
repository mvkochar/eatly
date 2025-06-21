import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import './css/Menu.css'

const marks = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 15,
    label: '$25',
  },
  {
    value: 30,
    label: '$50',
  },
  {
    value: 45,
    label: '$75',
  },
  {
    value: 60,
    label: '$100',
  },
  {
    value: 80,
    label: '$500',
  },
  {
    value: 100,
    label: '$1000',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}


const Menu = () => {
  return (
    <>
      <main className='menu-main d-f'>
        <div>
          <div className="menu-banner">
            <div className="menu-banner-illustration">
              <img src="/images/banner-illustration.png" alt="banner-illustration" />
            </div>
            <div className="menu-banner-mask">
              <h2 className="menu-banner-title">50% off</h2>
              <h3 className="menu-banner-subtitle">Weekends</h3>
            </div>
            <div className="menu-banner-pic">
              <img src="/images/food2.png" alt="food2" />
            </div>
            <div className="menu-banner-lines d-f">
              <div className="line line__active"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <form action="" className='menu-search d-f align-center'>
            <button type='button'>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15.1401" cy="15" r="9.37834" transform="rotate(-45 15.1401 15)" stroke="#C2C3CB" stroke-width="2" />
                <path d="M22.5112 21.9678L27.2549 26.6003" stroke="#C2C3CB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <input type="text" name='menuSearch' placeholder='Search' />
          </form>
          <div className="menu-select d-f">
            <button className='select-btn'>Food</button>
            <button className='select-btn select-btn__active'>Restaurant</button>
          </div>
        </div>
        <div className="menu-filter">
          <div>
            <h3 className="filter-bl-title">Category</h3>
            <div className="filter-categories-box d-f">
              <div className="filter-categories-item">
                <div><img src="/images/category1.png" alt="category1" /></div>
                <h4 className="categories-item-title">Pizza</h4>
              </div>
              <div className="filter-categories-item categories-item__active">
                <div><img src="/images/category2.png" alt="category2" /></div>
                <h4 className="categories-item-title">Asian</h4>
              </div>
              <div className="filter-categories-item">
                <div><img src="/images/category3.png" alt="category3" /></div>
                <h4 className="categories-item-title">Donat</h4>
              </div>
              <div className="filter-categories-item">
                <div><img src="/images/category4.png" alt="category4" /></div>
                <h4 className="categories-item-title">Ice</h4>
              </div>
            </div>
          </div>
          <div className="menu-filter-sort">
            <h3 className="filter-bl-title">Sort by</h3>
            <div className="filter-sort-box d-f jc-sb">
              <div className="sort-item">Recomended</div>
              <div className="sort-item sort-item__active">Fast Delivery</div>
              <div className="sort-item">Most Popular</div>
            </div>
          </div>
          <div className='menu-filter-price'>
            <h3 className="filter-bl-title">Price</h3>
            <div className="filter-price-slider">
              <Box sx={{ width: 215.3 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={25}
                  getAriaValueText={valuetext}
                  step={25}
                  valueLabelDisplay="auto"
                  marks={marks}        
                />
              </Box>
            </div>
          </div>
          <button className='menu-filter-apply'>Apply</button>
        </div>
      </main>
    </>
  )
}

export default Menu