
interface productInfo {
  Tittle : string;
  ImageSource : string;
  Description : string;
}


const ProductPage: React.FC<productInfo | undefined> = (props) => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <img src={props?.ImageSource} className="d-block mx-lg-auto img-fluid" alt={props?.Tittle} width={700} height={500} loading="lazy" />
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{props?.Tittle}</h1>
          <p className="lead">{props?.Description}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Bowerse More products</button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProductPage