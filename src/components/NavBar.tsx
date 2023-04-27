import React from 'react';
import {Link} from "react-router-dom"

export const NavBar = () => {
    return (
        <div>
          <Link to="/">Home</Link> |
          <Link to="/login">Login</Link> |
          <Link to="/contact">Contact</Link> |

          <Link to="/lesson13">Lesson13</Link> |


        </div>
    );
};