import {Card, Tabs} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import ControlRoomCards from './ControlRoomCards';
const ControlRoom = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'tab-to-do',
      content: 'To Do',
      accessibilityLabel: 'All customers',
      panelID: 'todo',
    },
    {
      id: 'tab-done',
      content: 'Done',
      panelID: 'done',
    },
  ];

  return (
    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <Card.Section>
        {getCard(tabs[selected])}
        </Card.Section>
      </Tabs>
    </Card>
  );
}

function getCard(tab) {
    console.log(tab.id)
    if (tab.id === 'tab-done') {
      return (<p>I love you@@@@@</p>);
    } 
    return (<ControlRoomCards/>);
  }

export default ControlRoom;