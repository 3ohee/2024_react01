import Item from './Item';

function PackingList(props) {
    return (
        <section>
            <h1>조건부 렌더링</h1>
            <ul>
                <Item
                    name='고길동'
                    isPacked={true}
                />

                <Item
                    name='둘리'
                    isPacked={false}
                />
                <Item
                    name='희동이'
                    isPacked={true}
                />

            </ul>


        </section>
    );
}

export default PackingList;