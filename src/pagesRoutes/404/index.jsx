import { Public } from './../../Public/index';

export const NotFound = () => {
  const { 
    users,
  } = Public.Hooks.use()

  if (!users) return <h1>Not found!</h1> 

  return(
    <div className="d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
      <div>
        <h1 className="text-center display-1 text-muted">404!</h1>
        <h1>Not Found This Page</h1>
      </div>
    </div>
  )
}