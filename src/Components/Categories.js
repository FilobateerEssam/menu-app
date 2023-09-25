import { Col, Row } from "react-bootstrap";
import { Roll } from "react-reveal";

const Categories = ({ FilterCategories, GeTALLCat }) => {
  // filter items by category
  const onfilter = (cat) => {
    FilterCategories(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col className="d-flex justify-content-center">
      <Roll left>
        {GeTALLCat.length >= 1 ? (
          GeTALLCat.map((cat) => {
            return (
              
              <div>
                <button
                  onClick={() => onfilter(cat)}
                  style={{ border: "1px solid #b45b35" }}
                  className="btns p-2 mx-2"
                >
                {/* cat only because it have only one that is category */}
                  {cat}
                </button>
              </div>
            );
          })
        ) : (
          <h1 className="text-center" style={{ color: "red" }}>
            {" "}
            لا يوجد تصنيفات
          </h1>
        )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Categories;
