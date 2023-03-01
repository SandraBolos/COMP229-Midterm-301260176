/* Sandra Bolos
301260176
COMP229-Midterm exam*/

export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}