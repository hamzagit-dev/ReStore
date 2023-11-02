import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { useStoreContext } from '../../app/api/context/StoreContext';
import { currencyFormat } from '../../app/api/util/util';

export function BasketSummary() {
  const { basket } = useStoreContext();

  const subtotal =
    basket?.items.reduce((sum, item) => sum + item.quantity * item.price, 0) ??
    0;

  const deliveryFee = subtotal > 10000 ? 0 : 500;

  return (
    <TableContainer component={Paper} variant={'outlined'}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell> Subtotal</TableCell>
            <TableCell align='right'>{currencyFormat(subtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery fee*</TableCell>
            <TableCell align='right'>{currencyFormat(deliveryFee)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Total</TableCell>
            <TableCell align='right'>
              {currencyFormat(subtotal + deliveryFee)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>*Orders over 100 qualify foe free delivery</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
