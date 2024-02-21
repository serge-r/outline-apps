// Copyright 2022 The Outline Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {makePathApiClient} from './fetcher';

describe('makePathApiClient', () => {
  const api = makePathApiClient('https://api.github.com/repos/Jigsaw-Code/');

  if (process?.versions?.node) {
    // This test relies on fetch(), which doesn't exist in Node (yet).
    return;
  }
  it('GET', async () => {
    const response = await api.request<{name: string}>('outline-server');
    expect(response.name).toEqual('outline-server');
  });
});
