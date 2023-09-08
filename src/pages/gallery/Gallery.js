import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Gallery.scss";
import { faMinus, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import Productcard from "../../components/CardForProduct/ProductCard";
import { useState } from "react";
import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

const Gallery = () => {
  const dummyData = [
    {
      Category: "Gender",
      value1: "Women",
      value2: "men",
      value3: "Girls",
      value4: "Boys",
      value5: "Children",
    },
    {
      Category: "Category",
      value1: "T-Shirts",
      value2: "Shirts",
      value3: "Jeans",
      value4: "Shorts",
      value5: "Something",
    },
    {
      Category: "Category",
      value1: "T-Shirts",
      value2: "Shirts",
      value3: "Jeans",
      value4: "Shorts",
      value5: "Something",
    },
    {
      Category: "Category",
      value1: "T-Shirts",
      value2: "Shirts",
      value3: "Jeans",
      value4: "Shorts",
      value5: "Something",
    },
    {
      Category: "Category",
      value1: "T-Shirts",
      value2: "Shirts",
      value3: "Jeans",
      value4: "Shorts",
      value5: "Something",
    },
  ];

  const [gridChange, setGridChange] = useState(3);
  const ChangingGrid = (value) => {
    setGridChange(value);
    console.log(gridChange);
  };

  return (
    <div className="GalleryProductPage">
      <div className="GalleryProductPageSub">
        <div className="Left">
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: 240,
              flexGrow: 1,
              maxWidth: 400,
              overflowY: "auto",
            }}
          >
            <TreeItem nodeId="1" label="Applications">
              {dummyData.map((e, idx) => {
                return (
                  <>
                    <div className="GalleryProductPageSubHeading1">
                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        sx={{
                          height: 240,
                          flexGrow: 1,
                          maxWidth: 400,
                          overflowY: "auto",
                        }}
                      >
                        <TreeItem nodeId="1" label="Applications">
                          <TreeItem nodeId="2" label="Calendar" />
                          <TreeItem nodeId="2" label="Calendar" />
                          <TreeItem nodeId="2" label="Calendar" />
                          <TreeItem nodeId="2" label="Calendar" />
                        </TreeItem>
                      </TreeView>
                    </div>
                    <hr />
                  </>
                );
              })}
            </TreeItem>
          </TreeView>
        </div>
        <div className="Right">
          <div className="RightTop">
            <h1>50 to 60 Percent Off</h1>
          </div>
          <div className="RightMiddle">
            <hr />
            <div className="RightMiddle2">
              <h3>something</h3>
              <div className="RightMiddle3">
                <h3>Grid</h3>
                <h3 onClick={() => ChangingGrid(3)}>3</h3>
                <h3 onClick={() => ChangingGrid(4)}>4</h3>
              </div>
              <h3>something</h3>
            </div>
            <hr />
          </div>
          <div className="RightBottom">
            <Productcard gridChange={gridChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
