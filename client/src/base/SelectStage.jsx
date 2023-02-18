import {Button, Popover, OptionList} from '@shopify/polaris';
import {useState, useCallback} from 'react';

const SelectStage = () => {
  const [selected, setSelected] = useState([]);
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Stage
    </Button>
  );

  return (
    <div>
      <Popover
        active={popoverActive}
        activator={activator}
        onClose={togglePopoverActive}
      >
        <OptionList
          title="Inventory Location"
          onChange={setSelected}
          options={[
            {
              value: 'byward_market',
              label: 'Byward Market',
              active: false,
            },
            {value: 'centretown', label: 'Centretown'},
            {
              value: 'hintonburg',
              label: 'Hintonburg',
              active: true,
            },
            {value: 'westboro', label: 'Westboro'},
            {value: 'downtown', label: 'Downtown'},
          ]}
          selected={selected}
        />
      </Popover>
    </div>
  );
}
export default SelectStage;