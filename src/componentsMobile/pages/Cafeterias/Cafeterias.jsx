import React, { useEffect, useState } from "react";
import Style from "./cafeterias.module.css";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Footer } from "../../layouts/footer/Footer";
import { SearchCafeterias } from "../../layouts/layoutsCafeterias/searchCafeterias/SearchCafeterias.jsx";
import { ItemsCafeterias } from "../../layouts/layoutsCafeterias/itemsCafeterias/ItemsCafeterias.jsx";
import { FincasCafeterias } from "../../layouts/layoutsCafeterias/fincasCafeterias/FincasCafeterias.jsx";
import { CommentsCafeterias } from "../../layouts/layoutsCafeterias/CommentsCafeterias/CommentsCafeterias.jsx";
import { Loader } from "../../layouts/loader/Loader";

export const Cafeterias = () => {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const getCafeterias = async () => {
    setIsLoading(true);
    await fetch("https://apimainejetravel.azurewebsites.net/api/Coffee/Lista")
      .then((response) => response.json())
      .then((data) => {
        const { coffeeList } = data;
        setData(coffeeList[0]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCafeterias();
  }, []);

  const handleFilterChage = (event) => {
    const { value } = event.target;
    setFilterName(value);
  };

  const filteredData = data.filter((item) =>
    filterName
      ? item.name.toLowerCase().includes(filterName.toLowerCase())
      : item
  );

  return (
    <>
      <NavBar />
      <div className={Style.sectionCafeterias}>
        <div className={Style.searchImg}>
          <div className={Style.filter}>
            <SearchCafeterias
              filterName={filterName}
              handleFilterChage={handleFilterChage}
            />
          </div>
        </div>

        <div className={Style.container}>
          {isloading ? (
            <Loader />
          ) : (
            <>
              {filteredData.length > 0 ? (
                <div>
                  {filteredData.map((item) => {
                    return (
                      <ItemsCafeterias
                        key={item.id_coffee}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        address={item.address}
                      />
                    );
                  })}
                </div>
              ) : (
                <h3>No se encontraron resultados</h3>
              )}
            </>
          )}
        </div>

        <div className={Style.containerImg}>
          <h2 className={Style.h2}>
            Otros sitios que te van a interesar visitar
          </h2>
          <div className={Style.grid}>
            {data.map((item) => {
              return <FincasCafeterias image={item.image} />;
            })}
          </div>
        </div>

        <CommentsCafeterias />
      </div>

      <Footer />
    </>
  );
};
