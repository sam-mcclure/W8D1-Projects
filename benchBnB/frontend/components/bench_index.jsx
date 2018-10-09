import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount(){
    this.props.fetchBenches();
  }

  render(){
    const BenchItems = this.props.benches.map((bench) => {
      return <BenchIndexItem key={bench.id} bench={bench} />;
    });

    return (
      <div>
        <ul>
          {BenchItems}
        </ul>
      </div>
    );
  }


}

export default BenchIndex;
