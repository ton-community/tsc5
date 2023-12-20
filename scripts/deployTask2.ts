import { toNano } from 'ton-core';
import { Task2 } from '../wrappers/Task2';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const task2 = provider.open(Task2.createFromConfig({}, await compile('Task2')));

    await task2.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(task2.address);

    // run methods on `task2`
}
