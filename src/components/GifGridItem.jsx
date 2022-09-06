export const GifGridItem = ({title, url, id}) => {
  return (
    <div className="card">
        <img src={url} id={id} width="120" height="120"/>  
        <p>{title}</p> 
    </div>
  )
}
