
import './App.css';
import Welcome from './components/Welcome';
import ScrollToTop from './components/scrolltop';
import Products from './components/Products';
const prodList = [
{
  n : "Lenovo IdeaPad 330s",
  i : "https://www.lenovo.com/medias/lenovo-laptop-ideapad-330-15-gallery-02.jpg?context=bWFzdGVyfHJvb3R8MTA4MzM1fGltYWdlL2pwZ3xoM2MvaDJjLzk3MTQ2OTk4MjkyNzguanBnfDQ1NzQ5ZjljNzAwOWE5ZjRmNDYxMGQzNTQyYWQzNjY1YmI5ZjZlYTY4MmY2ZjhhYTk2NmE4ZWU2MTE4ZWQ4YzI",
  d: "The lenovo IdeaPad 330s 15.6inch disp, 3hrs+battery, AMD Ryzen A6 (4GB RAM/1TB SSD Windows 11 Home/1.6KiloGrams)",
  p: "Rs 28,000.00"
},
{
  n : "Lenovo ThinkPad E14",
  i: "https://www.notebookcheck.net/fileadmin/_processed_/8/c/csm_DSC_0025_674fe84d76.jpg",
  d: " E14 Intel Core i3 12th Gen 14 FHD Thin and Light Laptop (8GB RAM/512GB SSD/Windows 11 Home/MS Office H&S 2021/FPR/Black/1.59 kg), 21E3S0AV00",
  p: "Rs 39,000.00"
},
{
  n : "Samsung Galaxy Book2 (NP750)",
  i:"https://images.samsung.com/is/image/samsung/p6pim/in/np750xed-kc1in/gallery/in-galaxy-book2-np750xeda-423585-np750xed-kc1in-532341748?$720_576_JPG$",
  d: "(NP750) Intel 12th Gen core i7 39.6cm (15.6) FHD Thin & Light Laptop (16 GB/512 GB/Windows 11/MS Office/Backlit Keyboard/Fingerprint Reader/Silver/1.55Kg)",
  p: "Rs 79,999.00"
},
]
function App() {
  return (
    <div>
    <ScrollToTop/>
     <Welcome/>  
     <ul>
            {
              prodList.map((element,index) => {
                return <li key={index}><Products n={element.n} i={element.i} d={element.d} p={element.p}/> </li>
              })
              
            }
        </ul>
        <div class="container">

        <a href="#" class="expl">
          <div class="expl__line"></div>
          <div class="expl__line"></div>
          <span class="expl__text">Explore</span>
          <div class="expl__drow1"></div>
          <div class="expl__drow2"></div>
        </a>

        </div>
    </div>
  );
}

export default App;
