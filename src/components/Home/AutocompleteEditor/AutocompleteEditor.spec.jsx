/* global jest, describe, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AutocompleteEditor from './AutocompleteEditor';

// -- https://github.com/facebook/draft-js/issues/702
jest.mock('draft-js/lib/generateRandomKey', () => () => '123');

describe('AutocompleteEditor', () => {
  it('renders correctly', () => {
    let mentionSuggestions = [];
    let hashtagSuggestions = [];
    let relationSuggestions = [];

    let wrapper = shallow(
      <AutocompleteEditor
        mentionSuggestions={mentionSuggestions}
        hashtagSuggestions={hashtagSuggestions}
        relationSuggestions={relationSuggestions}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    mentionSuggestions = [
      {
        name: 'Matthew Yorke',
        title: 'Senior Software Engineer',
        avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
      },
      {
        name: 'Julian Smith',
        title: 'United Kingdom',
        avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
      },
    ];

    wrapper = shallow(
      <AutocompleteEditor
        mentionSuggestions={mentionSuggestions}
        hashtagSuggestions={hashtagSuggestions}
        relationSuggestions={relationSuggestions}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    mentionSuggestions = [];
    wrapper = shallow(
      <AutocompleteEditor
        mentionSuggestions={mentionSuggestions}
        hashtagSuggestions={hashtagSuggestions}
        relationSuggestions={relationSuggestions}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    hashtagSuggestions = [
      {
        name: 'nba',
      },
      {
        name: 'sweet',
      },
    ];

    wrapper = shallow(
      <AutocompleteEditor
        mentionSuggestions={mentionSuggestions}
        hashtagSuggestions={hashtagSuggestions}
        relationSuggestions={relationSuggestions}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    relationSuggestions = [
      {
        name: 'Meta',
      },
      {
        name: 'Oculus',
      },
    ];

    wrapper = shallow(
      <AutocompleteEditor
        mentionSuggestions={mentionSuggestions}
        hashtagSuggestions={hashtagSuggestions}
        relationSuggestions={relationSuggestions}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    hashtagSuggestions = [];
    relationSuggestions = [];
    wrapper = shallow(
      <AutocompleteEditor
        mentionSuggestions={mentionSuggestions}
        hashtagSuggestions={hashtagSuggestions}
        relationSuggestions={relationSuggestions}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
