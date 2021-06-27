import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Fastfood } from '@material-ui/icons';
import QtyButton from './QtyButton';
import { useContext } from 'react';
import { FoodDetail } from './Interface';
import { foodCartContext } from "./FoodCart";


const foodList = [
  { id: 1, name: 'Rice', price: 30 },
  { id: 2, name: 'Parota (with Chicken Gravy)', price: 10 },
  { id: 3, name: 'FriedRice', price: 50 }
]

interface Column {
  id: string;
  label: string;
  minWidth?: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  format?: (value: number) => string;
  headerStyle?: any;
}

const TableCells = withStyles({
  root: {
    "@media (max-width: 400px)": {
      padding: '9px'
    },
  }

})(TableCell);

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440,
  },
  icon: {
    "@media (max-width: 500px)": {
      display: 'none'
    },
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const columns: Column[] = [
    { id: 'icon', label: '', align: 'left', headerStyle: classes.icon },
    { id: 'dish', label: 'Dish', align: 'left' },
    { id: 'price', label: 'Price', align: 'left', format: (value: any) => value.toLocaleString('en-US') },
    { id: 'qty', label: 'Qty', minWidth: '80px', align: 'left', format: (value: any) => value.toLocaleString('en-US') },
    { id: 'TotalPrice', label: 'Total Price', align: 'left', minWidth: '30px', format: (value: any) => value.toFixed(2) }
  ];

  return (
    <Paper className={classes.root} >
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCells
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={column.headerStyle}
                >
                  {column.label}
                </TableCells>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {foodList.map((food) => {
              return (
                <TableRows {...food} key={food.id} />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}

function TableRows(food: FoodDetail) {
  const classes = useStyles();
  const [qty, setQty] = useState(0)
  const { cart, modifyCart } = useContext(foodCartContext)

  const addToCart = (qty: number) => {
    setQty(qty)
    const totalPrice = food.price * qty
    const cartItem = {
      ...food,
      qty,
      totalPrice
    }
    modifyCart(cartItem)
    console.log(cart)
  }

  return (
    <TableRow hover tabIndex={-1} >
      <TableCells className={classes.icon}><Fastfood /></TableCells>
      <TableCells>{food.name}</TableCells>
      <TableCells>{food.price}</TableCells>
      <TableCells><QtyButton onChange={addToCart} /></TableCells>
      <TableCells>{qty * food.price}</TableCells>
    </TableRow>
  )
}

