import React, { useEffect, useState } from "react";
import Style from "./fincas.module.css";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Footer } from "../../layouts/footer/Footer";
import { SearchFincas } from "../../layouts/layoutsFincas/searchFincas/SearchFincas";
import { ItemsFincas } from "../../layouts/layoutsFincas/itemsFincas/ItemsFincas";
import { CafeteriasFincas } from "../../layouts/layoutsFincas/fincasCafeterias/CafeteriasFincas";
import { CommentsFincas } from "../../layouts/layoutsFincas/CommentsFincas/CommentsFincas";
import { Loader } from "../../layouts/loader/Loader";

export const Fincas = () => {
  const [data, setData] = useState([]);
  const [dataCafeterias, setDataCafeterias] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const getFincas = async () => {
    setIsLoading(true);
    await fetch("https://apimainejetravel.azurewebsites.net/api/Farm/Lista")
      .then((response) => response.json())
      .then((data) => {
        const { farmList } = data;
        setData(farmList[0]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getFincas();
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

  const getCafeterias = async () => {
    setIsLoading(true);
    await fetch("https://apimainejetravel.azurewebsites.net/api/Coffee/Lista")
      .then((response) => response.json())
      .then((dataCafeterias) => {
        const { coffeeList } = dataCafeterias;
        setDataCafeterias(coffeeList[0]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCafeterias();
  }, []);

  return (
    <>
      <NavBar />
      <div className={Style.sectionCafeterias}>
        <div className={Style.searchImg}>
          <div className={Style.filter}>
            <SearchFincas
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
                      <ItemsFincas
                        key={item.id_farm}
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
            {dataCafeterias.map((item) => {
              return <CafeteriasFincas image={item.image} />;
            })}
          </div>
        </div>

        <CommentsFincas />
      </div>

      <Footer />
    </>
  );
};
