import { InputFiltrStyled, LabelFiltrStyled } from './InputFiltr.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const InputFiltr = () => {

  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <LabelFiltrStyled>
      Filtr contacts by name:
      <InputFiltrStyled
        type="text"
        onChange={handleFilterChange}
        placeholder="enter name"
      />
    </LabelFiltrStyled>
  );
}
