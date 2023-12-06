import React from 'react'
// Example import statements


import Results from './Results';

const Routes = () => {
  return (
    <div className='p-6'>
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={["/search",'/images','/news','/videos']}>
          <Results />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes
