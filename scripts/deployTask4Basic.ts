import { toNano } from 'ton-core';
import { Task4Basic } from '../wrappers/Task4Basic';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const task4Basic = provider.open(Task4Basic.createFromConfig({}, await compile('Task4Basic')));

    await task4Basic.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(task4Basic.address);

    // run methods on `task4Basic`
}
