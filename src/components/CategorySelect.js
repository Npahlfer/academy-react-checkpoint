import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

/**
 *
 * @categories {Array} and array of categories from the movies api
 * @onChange {Function} a function that runs onChange
 * @value {string} Your current value
 */
export const CategorySelect = ({
  categories = [],
  onChange = () => {
    console.log("category changed");
  },
  value = "",
}) => {
  const categoryMenuItems = categories.map((item) => (
    <MenuItem key={`category-${item.id}`} value={item.id}>
      {item.category}
    </MenuItem>
  ));

  return (
    <FormControl fullWidth>
      <InputLabel id="simple-select-label">Category</InputLabel>
      <Select
        labelId="simple-select-label"
        value={value}
        label="Category"
        variant="filled"
        onChange={(e) => {
          onChange(e);
        }}
      >
        {categories && categoryMenuItems}
      </Select>
    </FormControl>
  );
};
