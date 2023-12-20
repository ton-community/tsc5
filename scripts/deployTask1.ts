import { toNano } from 'ton-core';
import { Task1 } from '../wrappers/Task1';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const task1 = provider.open(Task1.createFromConfig({}, await compile('Task1')));

    await task1.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(task1.address);

    // run methods on `task1`
}
