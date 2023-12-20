import { toNano } from 'ton-core';
import { Task3 } from '../wrappers/Task3';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const task3 = provider.open(Task3.createFromConfig({}, await compile('Task3')));

    await task3.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(task3.address);

    // run methods on `task3`
}
