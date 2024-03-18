import Image from "next/image";
import "./style.scss";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { HiMenu } from "react-icons/hi";

const CategoryPage = async() => {
  return (
    <div className="categoriesPage">
      <div className="header">
        <h1>Kolekcije</h1>
      </div>

      {/* FILTERS */}
      <div className="filterBar">
        <div className="innerContainer">
          <HiMenu />
          <p>Prikaži filtere</p>
        </div>
      </div>

      {/* COLLECTIONS */}
      <div className="collectionsGrid">
        <div className="collectionCard">
          <div className="image">
            <Image
              src="/test/bahrein1.jpeg"
              width={200}
              height={400}
              alt="Bahrein"
            />
          </div>
          <div className="title">
            <h2>Allesandria</h2>
          </div>
        </div>
        <div className="collectionCard">
          <div className="image">
            <Image
              src="/test/bahrein1.jpeg"
              width={200}
              height={400}
              alt="Bahrein"
            />
          </div>
          <div className="title">
            <h2>Allesandria</h2>
          </div>
        </div>
        <div className="collectionCard">
          <div className="image">
            <Image
              src="/test/bahrein1.jpeg"
              width={200}
              height={400}
              alt="Bahrein"
            />
          </div>
          <div className="title">
            <h2>Allesandria</h2>
          </div>
        </div>
        <div className="collectionCard">
          <div className="image">
            <Image
              src="/test/bahrein1.jpeg"
              width={200}
              height={400}
              alt="Bahrein"
            />
          </div>
          <div className="title">
            <h2>Allesandria</h2>
          </div>
        </div>
        <div className="collectionCard">
          <div className="image">
            <Image
              src="/test/bahrein1.jpeg"
              width={200}
              height={400}
              alt="Bahrein"
            />
          </div>
          <div className="title">
            <h2>Allesandria</h2>
          </div>
        </div>
        <div className="collectionCard">
          <div className="image">
            <Image
              src="/test/bahrein1.jpeg"
              width={200}
              height={400}
              alt="Bahrein"
            />
          </div>
          <div className="title">
            <h2>Allesandria</h2>
          </div>
        </div>
        <div className="collectionCard">
          <div className="image">
            <Image
              src="/test/bahrein1.jpeg"
              width={200}
              height={400}
              alt="Bahrein"
            />
          </div>
          <div className="title">
            <h2>Allesandria</h2>
          </div>
        </div>
        <div className="collectionCard">
          <div className="image">
            <Image
              src="/test/bahrein1.jpeg"
              width={200}
              height={400}
              alt="Bahrein"
            />
          </div>
          <div className="title">
            <h2>Allesandria</h2>
          </div>
        </div>
        <div className="collectionCard">
          <div className="image">
            <Image
              src="/test/bahrein1.jpeg"
              width={200}
              height={400}
              alt="Bahrein"
            />
          </div>
          <div className="title">
            <h2>Allesandria</h2>
          </div>
        </div>
      </div>
      <div className="pagination">
        <button className="prevBtn">
          <FaArrowLeft />
        </button>
        <div className="pages">1 / 7</div>
        <button className="nextBtn">
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default CategoryPage