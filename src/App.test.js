import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BookingForm from "./components/BookingForm";

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
})

test("updateTimes updates the available times correctly", () => {
  const mockUpdateTimes = jest.fn();
  const mockAvailableTimes = ['17.00', '18.00', '19.00'];
  render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
  userEvent.selectOptions(screen.getByLabelText('Choose date'), '20.00');
  expect(mockUpdateTimes).toHaveBeenCalledWith('20.00');
})

test('form input fields have correct attributes', () => {
  const mockUpdateTimes = jest.fn();
  const mockAvailableTimes = ['17.00', '18.00', '19.00'];
  const { getByLabelText, getByPlaceholderText, getByText }=render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);

  // Doğru etiket ve placeholder ile giriş alanlarına erişim
  const dateInput = getByLabelText('Choose date');
  const timeSelect = getByLabelText('Choose time');
  const guestsInput = getByPlaceholderText('1'); // placeholder'ı kullanarak giriş alanına erişim
  const occasionSelect = getByLabelText('Occasion');

  // HTML5 doğrulama özelliklerini kontrol etme
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toBeRequired();

  expect(timeSelect).toHaveAttribute('type', 'select-one');
  expect(timeSelect).toBeRequired();

  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  expect(occasionSelect).toHaveAttribute('type', 'select-one');
  expect(occasionSelect).toBeRequired();
});