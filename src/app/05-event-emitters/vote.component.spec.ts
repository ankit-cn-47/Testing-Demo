import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise vote change event', () => {
    let totalVotes;
    component.voteChanged.subscribe(tv => totalVotes = tv);
    component.upVote();
    expect(totalVotes).toBe(1);
  });
});