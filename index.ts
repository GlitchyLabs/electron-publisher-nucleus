import { Publisher, PublishContext, UploadTask } from "electron-publish/out/publisher";

console.debug = function(...args) {
  if(process.env.DEBUG) console.log(`\x1b[33m[DEBUG] \x1b[0m`, ...args);
}

class NucleusPublisher extends Publisher {
  protected readonly context: PublishContext;
  providerName = 'Nucleus';

  constructor(context: PublishContext) {
    super(context);
    this.context = context;
  }

  async upload(task: UploadTask) {
    // this.createProgressBar();
    console.debug(task);
    // return new Promise ((resolve, reject) => {
    //   resolve("done");
    //   reject(new Error("…"));
    // });
  }

  toString(): string {
    return 'Not Implemented';
  };
}
  
export default NucleusPublisher;
